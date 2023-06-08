import MenuItem from "./subMenuList";
import AdditionalMenu from "./AdditionalMenu";

function MenuTree({ menuList, setMenulist }) {
 

  const handleAddItem = (parentItem) => {
    const newItem = {
      id: window.crypto.randomUUID(),
      name: `${parentItem.name}.${parentItem.children.length + 1}`,
      children: [],
    };

    parentItem.children.push(newItem);
    const updatedMenuItems = [...menuList];
    localStorage.setItem("menuList", JSON.stringify(updatedMenuItems));
    return updatedMenuItems;



  };

  const handleDeleteItem = (item) => {
    const updatedMenuItems = deleteItemFromList(menuList, item);
    setMenulist(updatedMenuItems);
    localStorage.setItem("menuList", JSON.stringify(menuList));

  };

  const deleteItemFromList = (list, item) => {
    const newList = list.filter((currentItem) => currentItem.id !== item.id);
    newList.forEach((currentItem) => {
      if (currentItem.children) {
        currentItem.children = deleteItemFromList(currentItem.children, item);
      }
    });
    return newList;
  };

  const onClickAddParent = () => {
    const newItem = {
      id: window.crypto.randomUUID(),
      name: `Container ${menuList.length + 1}`,
      children: [],
    };
    setMenulist([...menuList, newItem]);
    localStorage.setItem("menuList", JSON.stringify(menuList));

  };



  return (
    <>
      <AdditionalMenu handleAddMenuItem={onClickAddParent} />
      <div className="sideBarContainer">
        <ul>
          {menuList.map((item) => (
            <MenuItem menuList={menuList} key={item.id} item={item} onAddItem={handleAddItem} onDeleteItem={handleDeleteItem} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default MenuTree;
