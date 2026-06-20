import { Routes } from '@angular/router';
import { Overview } from './overview/overview';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { Achievements } from './achievements/achievements';
import { Projects } from './projects/projects';

export const routes: Routes = [
{ path: '', redirectTo: 'overview', pathMatch: 'full' },

{ path: 'overview', component: Overview},
{ path: 'resume', component: Resume },
{ path: 'achievements', component: Achievements },
{ path: 'projects', component: Projects },
{ path: 'contact', component: Contact },

{ path: '**', redirectTo: 'overview' }
];
