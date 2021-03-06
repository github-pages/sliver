/*
  Sliver Implant Framework
  Copyright (C) 2019  Bishop Fox
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatMenuModule, MatTabsModule,
  MatFormFieldModule, MatTooltipModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule,
  MatDialogModule, MatGridListModule, MatCardModule, MatTableModule, MatSortModule, MatInputModule,
  MatStepperModule, MatSnackBarModule, MatSlideToggleModule, MatSidenavModule, MatDividerModule,
  MatProgressBarModule
} from '@angular/material';

const modules = [
  MatButtonModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatMenuModule, MatTabsModule,
  MatFormFieldModule, MatTooltipModule, MatToolbarModule, MatIconModule, MatProgressSpinnerModule,
  MatDialogModule, MatGridListModule, MatCardModule, MatTableModule, MatSortModule, MatInputModule,
  MatStepperModule, MatSnackBarModule, MatSlideToggleModule, MatSidenavModule, MatDividerModule,
  MatProgressBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class BaseMaterialModule { }
