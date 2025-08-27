const userName = 'Kerlon';

const sayHi = `Hi, ${userName}.`;

type ReadPermissions = 'read' | `no-read`;
type WritePermissions = 'write' | `no-write`;

type PermissionsMain = `${ReadPermissions}-${WritePermissions}`;

let arquivo:PermissionsMain = 'read-no-write';

type DataFile = {
    data: string;
    permissions: PermissionsMain;
}

type DataFileEventsNames = `${keyof DataFile}Changed`