import icons from 'url:../../img/icons.svg';
import View from './View';



class PaginationView extends View {

  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline')
      if(!btn) return;

      const goToPage = +btn.dataset.goto;
      
      handler(goToPage);
    })
  }
  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    console.log(numPages)
    const curPage = this._data.page;

    function prevButton(n) {
      return `<button data-goto="${curPage - n}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - n}, Last page</span>
      </button>`
    };
    function nextButton(n) {
      return `<button data-goto="${curPage + n}" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + n}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> `
    }
    // page 1 , and there are other pages
    if (curPage === 1 && numPages > 1) {
      // console.log(nextButton(1),prevButton(1))
      return nextButton(1);
      //   return `<button class="btn--inline pagination__btn--next">
      //   <span>Page ${curPage + 1}</span>
      //   <svg class="search__icon">
      //     <use href="${icons}#icon-arrow-right"></use>
      //   </svg>
      // </button> `

    }
    // last page

    if (curPage === numPages && numPages > 1) {

      return prevButton(1);
      // return `<button class="btn--inline pagination__btn--prev">
      //   <svg class="search__icon">
      //     <use href="${icons}#icon-arrow-left"></use>
      //   </svg>
      //   <span>Page ${curPage - 1}, Last page</span>
      // </button>`

      //هون بدي اعدل
    }

    // other page
    if (curPage < numPages) {
      // return nextButton(1) & prevButton(1);

      return `
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> 
          <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
       `
    }

    // page 1 , and there are no other pages
    return ``;
    //   return `<button class="btn--inline pagination__btn--prev">
    //   <svg class="search__icon">
    //     <use href="${icons}#icon-arrow-left"></use>
    //   </svg>
    //   <span>All Results</span>
    // </button>`
  }

}

export default new PaginationView();