import React, { useState } from "react";
import { PlusOutlined, DownOutlined, DeleteOutlined,UpOutlined } from "@ant-design/icons";

function MenuItem({ item, onAddItem, onDeleteItem,menuList }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleItemClick = () => {
    setExpanded(!expanded);
  };

  const handleDeleteItemClick = (e) => {
    e.stopPropagation();
    onDeleteItem(item);
  }

  const handleAddItemClick = (e) => {
    e.stopPropagation();
    onAddItem(item);

  };
  




return (
  <div >
  <li  className="menuListSection">
    {/* {item?.children?.length ? ( */}
      <div className="menuListLengthContainer"  onClick={handleItemClick}>
        <div className="addDeleteContainer">
        <div>{item.name} </div>
        <div><PlusOutlined style={{marginLeft:"35px"}} onClick={(e) =>handleAddItemClick(e)} /></div>
        <div><DeleteOutlined style={{marginLeft:"35px"}} onClick={(e) => handleDeleteItemClick(e)} /></div>
        </div>
        {
          expanded?
        <div> <UpOutlined style={{marginLeft:"50px",marginRight:"10px"}} /> </div> :<div> <DownOutlined style={{marginLeft:"50px",marginRight:"10px"}} /> </div>
}
      </div>

    {/* ) : (
      <div className="menuListContainer" onClick={handleItemClick}>
      <div>{item.name} </div> 
      <div className=""><PlusOutlined style={{marginLeft:"35px"}} onClick={(e) =>handleAddItemClick(e)} /> </div>
      <div className=""><DeleteOutlined style={{marginLeft:"35px"}} onClick={(e) => handleDeleteItemClick(e)}  /></div>

    </div>
    )} */}
    {hasChildren && expanded && (
      <ul>
        {item?.children?.map((child) => (
          <MenuItem key={child.id} item={child} onAddItem={onAddItem} onDeleteItem={onDeleteItem}  />
        ))}
      </ul>
    )}
  </li>
  </div>
);

}

export default MenuItem;


