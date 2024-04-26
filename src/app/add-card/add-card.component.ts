import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit{

  addCardForm !: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.addCardForm = this.fb.group({
      nickName: ['', Validators.required],
      cardHolderName:['', Validators.required],
      cardNumber:['', Validators.required],
      bankName:['', Validators.required],
      expiryDate:['', Validators.required]
    })
  }

}
