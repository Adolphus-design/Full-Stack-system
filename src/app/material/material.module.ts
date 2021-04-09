import { NgModule } from '@angular/core';
import { MatButtonModule,  } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'
const metarial =[
  MatButtonModule,
  MatToolbarModule
]
@NgModule({
  
  imports: [metarial],
  exports: [metarial]
})
export class MaterialModule { }
