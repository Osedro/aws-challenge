import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../_models/category';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryServiceService } from '../category-service.service';
import { MatTable } from '@angular/material/table';
import { CategoryDialogCreateComponent } from '../category-dialog-create/category-dialog-create.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = [];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private dialog: MatDialog,
    private categoryService: CategoryServiceService) {

    }

  ngOnInit(): void {
    this.updateCategories()
  }

  public deleteCategory(category: Category){
    this.dialog.open(DialogComponent,{disableClose:true,
      data: {dialogMsg: 'Você tem certeza que gostaria de apagar a categoria?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp => {
        if(resp == true){
          this.dataSource = []
          this.categoryService.delCategory(category.id).subscribe(categories => {
            this.updateCategories()
          })
          console.log("Categoria apagada com sucesso!");
        }else{
          console.log("Categoria não apagada");
        }
      }
    )
  }

  public createNewCategory(){
    this.dialog.open(CategoryDialogCreateComponent,{disableClose:true,
      data: {dialogMsg: 'New Category', leftButtonLabel: 'Cancel', rightButtonLabel: 'Create'}}).afterClosed().subscribe(
      resp => {
        if(resp == true){
          this.updateCategories()
          console.log("Device criado com sucesso!");
        }else{
          console.log("Criação do device cancelada!");
        }
      }
    )
  }

  public updateCategories(){
    console.log("Updanting categories...")
    this.dataSource = []
    this.categoryService.getCategories().subscribe(categories => {
      for(let i = 0 ; i < categories.length ; i++){
        var cat = new Category()

        cat.name = categories[i].name
        cat.id = categories[i].id
        this.dataSource.push(cat)
      }
      this.table.renderRows();
    })
  }

}
