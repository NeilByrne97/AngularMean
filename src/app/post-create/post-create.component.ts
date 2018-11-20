import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';
import {FormControl, Validators} from '@angular/forms'
import { MatSelectModule } from '@angular/material';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.name, form.value.number, form.value.address, form.value.email).subscribe();
    // When adding also put it in post.model.ts and server.js/app.post
    console.log(form.value);
    form.resetForm();
  }
  


  ngOnInit() {



  }

}
