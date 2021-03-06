
import icons from 'url:../../img/icons.svg';

export default class View {
    _data;
    render(data) {
      if(!data || (Array.isArray && data.length === 0)) return this.renderError();
      this._data = data;
      const markup = this._generateMarkup();
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
  
    }
  
    _clear() {
        // console.log(this._parentElement)
      this._parentElement.innerHTML = '';
  
    }

    renderError(message = this._errorMessage) {
        const markup = `
             <div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>
            `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
    
      renderSuccess(message = this._successMessage) {
        const markup = `
    
        <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
            `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
    
    

}


