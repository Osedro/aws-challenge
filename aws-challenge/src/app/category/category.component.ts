import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../_models/category';
import { DialogComponent } from '../dialog/dialog.component';

export const CATEGORY_DATA = [
  {name:'Educação', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Saúde', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Trabalho', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
  {name:'Outros', guid:'aaaa-bbbbb-cccc-dddd'},
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editCategory(category: Category){
    console.log("Edit category clicked")
  }

  public deleteCategory(category: Category){
    this.dialog.open(DialogComponent,{disableClose:true,
      data: {dialogMsg: 'Você tem certeza que gostaria de apagar a categoria?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp => {
        if(resp == true){
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

}
