import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { EditarComponent } from 'app/editar/editar.component';


export const AdminLayoutRoutes: Routes = [
    
    { path: 'agregar',   component: UserProfileComponent },
    { path: 'lista',     component: TableListComponent },
    { path: 'editar/:id',     component: EditarComponent },

];
