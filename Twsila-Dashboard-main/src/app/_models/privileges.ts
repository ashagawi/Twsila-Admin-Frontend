export enum Privileges {
  ADD_PRIVILEGE = 1,
  REMOVE_PRIVILEGE = 2,
  DISABLE_USER = 3,
  ADD_USER = 4,
  CHANGE_PWD_FOR_OTHERS = 5,
  AUDIT_SYSTEM_USERS = 6,
  MANAGE_CAREERS = 7
}


export enum Privileges_Names {
  ADD_PRIVILEGE = "Add Privilege",
  REMOVE_PRIVILEGE = "Remove Privilege",
  DISABLE_USER = "Disable User",
  ADD_USER = "Add User",
  CHANGE_PWD_FOR_OTHERS = "Change Password for Others",
  AUDIT_SYSTEM_USERS = "Audit System Users",
  MANAGE_CAREERS = "Manage Careers"
}


export const Privileges_List = [
  {
    id: Privileges.ADD_PRIVILEGE, value: Privileges_Names.ADD_PRIVILEGE , display:true
  }, {
    id: Privileges.REMOVE_PRIVILEGE, value: Privileges_Names.REMOVE_PRIVILEGE , display:true
  }, {
    id: Privileges.ADD_USER, value: Privileges_Names.ADD_USER , display:true
  }, {
    id: Privileges.DISABLE_USER, value: Privileges_Names.DISABLE_USER , display:true
  }, {
    id: Privileges.CHANGE_PWD_FOR_OTHERS, value: Privileges_Names.CHANGE_PWD_FOR_OTHERS , display:true
  }, {
    id: Privileges.MANAGE_CAREERS, value: Privileges_Names.MANAGE_CAREERS, display:true
  }, {
    id: Privileges.AUDIT_SYSTEM_USERS, value: Privileges_Names.AUDIT_SYSTEM_USERS , display:true
  }
]
