import jsPDF from 'jspdf';
import wackenhut from './wackenhut.png'

class Pdf {
    constructor(){
        this.doc = new jsPDF()
        this.logo = wackenhut
    }

    createPdf(datum, auftragsnummer, kennzeichen, fin, erstzulassung, allAufgaben, fehlerObject){

    const pageHeight = this.doc.internal.pageSize.height
    const yStart = 20
    const xStart = 20
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(18);
    this.doc.text(xStart, yStart, `Service-Auftrag am ${datum}`)

    const imageBreite = 40
    this.doc.addImage(this.logo, 'png', 150, yStart-4.5, imageBreite, imageBreite*0.37);
    
    const werteStart = yStart + 15
    const zeilenabstand = 6
    const tabAbstand = 70
    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(12);
    this.doc.text(xStart, werteStart, 'Auftragsnummer:')
    this.doc.text(tabAbstand, werteStart, `${auftragsnummer}`)

    this.doc.text(xStart, werteStart + zeilenabstand, 'Kennzeichen:')
    this.doc.text(tabAbstand, werteStart + zeilenabstand, `${kennzeichen}`)

    this.doc.text(xStart, werteStart + (2 * zeilenabstand), 'FIN:')
    this.doc.text(tabAbstand, werteStart + (2 * zeilenabstand), `${fin}`)

    this.doc.text(xStart, werteStart + (3 * zeilenabstand), 'Erstzulassung:')
    this.doc.text(tabAbstand, werteStart + (3 * zeilenabstand), `${erstzulassung}`)


    let aufgabenToRender = []
    fehlerObject.forEach(a => {
        const id = a.fehler_id
        allAufgaben.forEach(b => {
            if(b.id === id && a.aufgabe) aufgabenToRender.push(b)
        })
    })


    let lastAbstand = 0
    let start = werteStart + (3*zeilenabstand) + 20 

   aufgabenToRender.forEach(aufgabeToRender => {

        this.doc.setFont('helvetica', 'bold')
        this.doc.setFontSize(14);
        this.doc.text(xStart, start + lastAbstand, `${aufgabeToRender.todo}`)

        this.doc.setFont('helvetica', 'normal')
        this.doc.setFontSize(12);
        const zeilenabstandGroesser = zeilenabstand + 3

        this.doc.text(xStart, lastAbstand + start + zeilenabstandGroesser, 'Baujahre:')
        const baujahre = this.doc.splitTextToSize(aufgabeToRender.baujahre, 125)
        this.doc.text(tabAbstand, lastAbstand + start + zeilenabstandGroesser, baujahre)
        const zeileBaujahre = this.doc.getTextDimensions(baujahre)

        this.doc.text(xStart, lastAbstand + start + zeilenabstandGroesser + zeilenabstand/2 + zeileBaujahre.h, 'Bemerkung:')
        const bemerkung = this.doc.splitTextToSize(aufgabeToRender.bemerkung, 125)
        this.doc.text(tabAbstand, lastAbstand + start + zeilenabstandGroesser + zeilenabstand/2 + zeileBaujahre.h, bemerkung)
        const zeileBemerkung = this.doc.getTextDimensions(bemerkung)

        // checkboxes
        lastAbstand += zeileBaujahre.h + zeileBemerkung.h + 20
        this.doc.text(xStart, lastAbstand + start, `[ ] In Ordnung                     [ ] Nicht in Ordnung                       [ ] Bilder/ Video gemacht`)

        lastAbstand += 20
        if(lastAbstand > pageHeight - 100) {
            this.doc.addPage();
            start = 20
            lastAbstand = 0
        }
    })

    if(lastAbstand > pageHeight - 100) {
        this.doc.addPage();
        start = 20
        lastAbstand = 0
    }

    this.doc.setFontSize(10);
    lastAbstand += 10
    this.doc.text(tabAbstand + 70, lastAbstand + start, `___________________________`)
    this.doc.text(tabAbstand + 70, lastAbstand + start + zeilenabstand, `Vollständig bearbeitet`)

    }

    savePdf(auftragsnummer){
        this.doc.save(`ServiceAuftrag_${auftragsnummer}_aufgaben.pdf`)
    }
}

export default Pdf