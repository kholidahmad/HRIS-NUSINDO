import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path:'hcm/employee',
    //loadChildren: './hcm/employee/employee.module#EmployeeModule',
    loadChildren: () => import('../../../hcm/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'test1',
    loadChildren: './test1/test1.module#Test1Module'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'hcm/myhome',
    loadChildren: () => import('../../../hcm/myhome/myhome.module').then(m => m.MyhomeModule)
  },
  {
    path: 'hcm/official_trip',
    loadChildren: () => import('../../../hcm/official_trip/official_trip.module').then(m => m.Official_tripModule)
  },
  {
    path: 'hcm/health_claim',
    loadChildren: ()=> import('../../../hcm/health_claim/health-claim.module').then(m => m.HealthClaimModule)
  }

//   {
//     path: 'calendar',
//     loadChildren: './calendar/calendar.module#CalendarsModule'
//   },
//   {
//     path: 'charts',
//     loadChildren: './charts/charts.module#ChartsNg2Module'
//   },
//    {
//     path: 'forms',
//     loadChildren: './forms/forms.module#FormModule'
//   },
//  /* {
//     path: 'maps',
//     loadChildren: './maps/maps.module#MapsModule'
//   },*/
//   {
//     path: 'tables',
//     loadChildren: './tables/tables.module#TablesModule'
//   },
//   {
//     path: 'datatables',
//     loadChildren: './data-tables/data-tables.module#DataTablesModule'
//   },
//   {
//     path: 'uikit',
//     loadChildren: './ui-kit/ui-kit.module#UIKitModule'
//   },
//   {
//     path: 'components',
//     loadChildren: './components/ui-components.module#UIComponentsModule'
//   },
//   {
//     path: 'pages',
//     loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
//   },
//   {
//     path: 'cards',
//     loadChildren: './cards/cards.module#CardsModule'
//   },
//   {
//     path: 'colorpalettes',
//     loadChildren: './color-palette/color-palette.module#ColorPaletteModule'
//   },
//   {
//     path: 'chat',
//     loadChildren: './chat/chat.module#ChatModule'
//   },
//   {
//     path: 'chat-ngrx',
//     loadChildren: './chat-ngrx/chat-ngrx.module#ChatNGRXModule'
//   },
//   {
//     path: 'inbox',
//     loadChildren: './inbox/inbox.module#InboxModule'
//   },
//   {
//     path: 'taskboard',
//     loadChildren: './taskboard/taskboard.module#TaskboardModule'
//   },
//   {
//     path: 'taskboard-ngrx',
//     loadChildren: './taskboard-ngrx/taskboard-ngrx.module#TaskboardNGRXModule'
//   },
//   {
//     path: 'player',
//     loadChildren: './player/player.module#PlayerModule'
//   }
];