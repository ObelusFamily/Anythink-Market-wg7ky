import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }
  if (props.items.length === 0 && !props.searchtag && props.searchtag<2) {
   
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }
  if (props.items.length === 0) {
   
    return (
    <div className="d-flex align-items-center justify-content-center">
    <div className="p-4 no-items text-center w-50 m-2" id="empty">No items are found for "<strong>{props.searchtag}</strong>" yet.</div>
    </div>
    )
  }

  

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2 " key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
