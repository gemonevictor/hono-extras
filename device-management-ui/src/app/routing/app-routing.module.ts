import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TenantListComponent} from '../components/tenants/tenant-list/tenant-list.component';
import {TenantDetailComponent} from '../components/tenants/tenant-detail/tenant-detail.component';
import {DeviceDetailComponent} from '../components/devices/device-detail/device-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'tenant-list', component: TenantListComponent},
      {path: 'tenant-detail/:id', component: TenantDetailComponent},
      {path: 'device-detail/:id', component: DeviceDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule {
}
