import { paths } from "../../constants/paths";

export const items = [
    {
        key: '0',
        label: 'Dashboard',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-desktop',
        url: "/dashboard"
    },
    {
        key: '1',
        label: "User",
        icon: "pi pi-fw pi-user",
        children: [
            {
                key: '1-1',
                label: 'List',
                icon: 'pi pi-fw pi-list',
                url: paths.user
            },
            {
                key: '1-2',
                label: 'Create',
                icon: 'pi pi-fw pi-plus',
                url: paths.userCreate
            },
        ]
    },
];
