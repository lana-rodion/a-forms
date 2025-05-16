import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShareDataComponent } from './components/share-data/share-data.component';
import { ParentComponent } from './components/parent/parent.component';
import { ReceiverComponent } from './components/share-data/receiver/receiver.component';
import { ProjectComponent } from './components/share-data/project/project.component';
import { LocalstorageComponent } from './components/share-data/localstorage/localstorage.component';
import { RouteparamsComponent } from './components/share-data/routeparams/routeparams.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sharedata', component: ShareDataComponent },
  { path: 'sharedata/inputOutput', component: ParentComponent },
  { path: 'sharedata/behaviorSubject', component: ReceiverComponent },
  { path: 'sharedata/viewChild', component: ProjectComponent },
  { path: 'sharedata/localStorage', component: LocalstorageComponent },
  { path: 'sharedata/routeParams', component: RouteparamsComponent },
];
