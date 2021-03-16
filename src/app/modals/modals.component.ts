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

  public modalRef: NgbModalRef;
  public isChecked: boolean = false;
  public left_weight = 0;
  public top_weight = 0;
  modalOptions: NgbModalOptions = ModalConfig;
  constructor(public modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {  }

  openModal(modalValue) {
    this.modalRef = this.modalService.open(modalValue, this.modalOptions);
  }

  closeModal() {
    this.modalRef.close();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.left();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.left();
    }
    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.top();
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.top();
    }
  }

  left() {
    this.left_weight++;
  }

  top() {
    this.top_weight++;
  }
}
