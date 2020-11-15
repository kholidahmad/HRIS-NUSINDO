// Sidebar route metadata
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    badge: string;
    badgeClass: string;
    isExternalLink: boolean;
    submenu:RouteInfo[];
    id_modul_lv1: number;
    id_modul_lv2: number;
    id_modul_lv3: number;
    id_modul_lv4: number;
    orderby: number
}
