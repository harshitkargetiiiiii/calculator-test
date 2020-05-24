import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNum = 0;
  firstOp = null;
  operator = null;
  waitForSecnum = false;

  constructor() { }



  ngOnInit(): void {
  }

  getNum(n){
    console.log(n)
    if(this.waitForSecnum){
      this.currentNum = n;
      this.waitForSecnum = false;
    }else{
      this.currentNum == 0 ? this.currentNum = n : this.currentNum += n;
    }
  }

  doCal(op , secondOp){
    console.log(op,secondOp, this.firstOp)
    switch(op){
      case '+': 
      return this.firstOp += secondOp ;

      case '-':
      return this.firstOp -= secondOp;

      case '*':
        return this.firstOp *= secondOp;

      case '/':
        return this.firstOp /= secondOp
        
      case '=':
      return secondOp  
    }
  }

  getOperations(op){
    console.log(op);

    if(this.firstOp == null){
      this.firstOp = Number(this.currentNum)
    }else if(this.operator){
      const result = this.doCal(this.operator, Number(this.currentNum))
      console.log(result)
      this.currentNum = result
    }

    this.operator = op;
    this.waitForSecnum = true;
  }

  clear(){
    this.currentNum = 0;
    this.firstOp = null;
    this.operator = null;
    this.waitForSecnum = false;
  }
}
