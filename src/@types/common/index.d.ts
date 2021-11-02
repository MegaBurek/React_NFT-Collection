import { FunctionComponent } from "react";

export type RouteType = {
    path: string
    name: string
    component: FunctionComponent
}

export type ActionType = {
    type: string,
    payload?: object | string | number
}

export type categoryOptions = {
    [key: string]: boolean
}
