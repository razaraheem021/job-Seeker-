
import {rolePermissions} from "./rolePermissions.js"
export function checkPermission(role, action) {
    if (rolePermissions[role] && rolePermissions[role][action] === false) {
        return false;
    }
    return true;
}