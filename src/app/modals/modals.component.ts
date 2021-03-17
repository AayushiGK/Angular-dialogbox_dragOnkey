import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
export enum KEY_CODE {
  UP_ARROW = 24,
  DOWN_ARROW = 25,
  RIGHT_ARROW = 26,
  LEFT_ARROW = 27
}
export const ModalConfig: NgbModalOptions = {
  size: 'lg',
  backdrop: 'static',
  keyboard: true,
}
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  public modal_count=5;
  public isChecked: boolean = false;
  public left_weight = 0;
  public top_weight = 0;
  constructor(public modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    var ele = document.getElementById("dragElement");
    ele.style.display ="none";
  }

  popUp() {
    var x = document.getElementById("dragElement");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

}