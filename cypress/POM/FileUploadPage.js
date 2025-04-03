import 'cypress-file-upload';
class FileUploadPage{
    goToFileUploadPage(){
        cy.visit('https://qa-practice.netlify.app/file-upload');
    }

    uploadFile(){
        cy.get('[id="file_upload"]').attachFile('example-file.txt');
    }

    clickOnSubmitButton(){
        cy.get('[type="submit"]').click();
    }


}

module.exports = new FileUploadPage();