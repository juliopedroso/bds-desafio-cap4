import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import './styles.css';
import ReactPaginate from 'react-paginate';

type Props = {
  forgePage?:number
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
}
//{ forgePage, pageCount, range, onChange }: Props
const Pagination = () => {
  return (
    <ReactPaginate
      /*forcePage={forgePage}*/
      pageCount={10}//{pageCount}
      pageRangeDisplayed={3}//{range}
      marginPagesDisplayed={1}
      containerClassName='pagination-container'
      pageLinkClassName='pagination-item'
      breakClassName='pagination-item'
      previousClassName='arrow-previous'
      nextClassName='arrow-next'
      activeLinkClassName='pagination-link-active'
      previousLabel={<div className='pagination-arrow-container'><ArrowIcon /></div>}
      nextLabel={<div className='pagination-arrow-container'><ArrowIcon /></div>}
      disabledClassName='arrow-inactive'
      /*onPageChange={(items) => (onChange) ?onChange(items.selected):{}}*/
    />
  );
};

export default Pagination;