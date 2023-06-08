import React from 'react'
import { PlusOutlined } from "@ant-design/icons";


const AdditionalMenu = ({handleAddMenuItem}) => {
  return (
    <div
    className="sidebar-addtitional"
    style={{
      marginTop: "10px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <span> Add Additional Collection </span>
    <PlusOutlined
      style={{ marginLeft: "20px" }}
      onClick={handleAddMenuItem}
    />
  </div>
  )
}

export default AdditionalMenu
