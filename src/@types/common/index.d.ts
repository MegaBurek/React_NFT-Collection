import { FunctionComponent } from "react";

export type RouteType = {
    path: string
    name: string
    component: FunctionComponent
    index?: boolean
}

export interface IHeaders {
    [key: string]: string;
}
