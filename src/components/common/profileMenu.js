import {Menu, Checkbox} from 'antd'

const ProfileMenu = () => {
    return (
      <Menu>
        <Menu.Item key="0">
          <span className="text">My Profile</span>
        </Menu.Item>
        <Menu.Item key="1">
          <span className="text">
            DarkMode <Checkbox style={{ marginLeft: "15px" }} />
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <span className="text">Change Password</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="text">Logout</span>
        </Menu.Item>
      </Menu>
    );
  };

  export default ProfileMenu