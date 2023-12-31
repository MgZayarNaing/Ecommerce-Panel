import { paginateOptions } from "../../constants/config";

export const userPayload = {
    update: {
        name: "",
        email: "",
        phone: "",
        jd: "",
        role: "",
        agree : "",
        position: "",
        password: "",
        con_password: "",
        annual_leave: "",
        casual_leave: "",
        probation_leave: "",
        unpaid_leave: ""
    },
    store: {
        name: "",
        email: "",
        phone: "",
        jd: "",
        role: "",
        agree : "",
        position: "",
        password: "",
        con_password: "",
        annual_leave: "",
        casual_leave: "",
        probation_leave: "",
        unpaid_leave: ""

    },
    columns: [
        { field: "id", header: "ID", sortable: true, show: true },
        { field: "name", header: "Full Name", sortable: true, show: true },
        { field: "email", header: "Email", sortable: true, show: true },
        { field: "email_verified_at", header: "Email Verified", sortable: true, show: true },
    ],
    paginateParams: {
        page: 1,
        per_page: paginateOptions.rows,
        columns: "id,name,email",
        search: "",
        order: "id",
        sort: "DESC"
    }
}