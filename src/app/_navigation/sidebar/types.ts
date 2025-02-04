import React from "react";

export type NavItem = {
    separator?: boolean;
    title: string;
    icon: React.ReactElement;
    href: string;
};