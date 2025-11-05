import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    currentPage = 1;

    handlePrevious() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.dispatchPageChange();
        }
    }

    handleNext() {
        this.currentPage++;
        this.dispatchPageChange();
    }

    dispatchPageChange() {
        const event = new CustomEvent('paginationchange', {
            detail: { page: this.currentPage }
        });
        this.dispatchEvent(event);
    }
}