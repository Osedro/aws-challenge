import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../_models/category';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryServiceService } from '../category-service.service';
import { MatTable } from '@angular/material/table';

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

  public editCategory(category: Category){
    console.log("Edit category clicked")
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
    console.log("Create category clicked")
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
