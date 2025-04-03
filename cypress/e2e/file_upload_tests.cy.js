import FileUploadPage from '../POM/FileUploadPage.js';
import ShoppingPage from '../POM/ShoppingPage.js';

describe('Upload Doc Tests', () => {
  beforeEach(() => {    
    FileUploadPage.goToFileUploadPage();
  });

  it('Document Upload', () => {
    // Arrange
    FileUploadPage.uploadFile();
    FileUploadPage.clickOnSubmitButton();
  });
});
