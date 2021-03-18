import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  public isChecked: boolean = false;
  public modalRef: NgbModalRef;
  public move_X_axis;
  public move_Y_axis;
  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
    var ele = document.getElementById("dragElement");
    ele.style.display = "none";
  }

  popUp() {
    var x = document.getElementById("dragElement");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  modalOpen(modal) {
    this.modalRef = this.modalService.open(modal);
  }
  closeModal() {
    this.modalRef.close();
  }

  close() {
    var x = document.getElementById("dragElement");
    x.style.display = "none";
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log('isChecked',this.isChecked)
    if (this.isChecked) {
      if (event.key == "Delete") {
        this.closeModal();
        this.close();
      }
      var modal_offset = document.getElementById("dragElement");
      // if (modal_offset.offsetTop > 420) { this.move_Y_axis = 400; }
      if (modal_offset.offsetLeft < 0) { this.move_X_axis = 0; }
      if (modal_offset.offsetTop < 0) { this.move_Y_axis = 0; }

      if (modal_offset.offsetLeft >= 0 && modal_offset.offsetTop >= 0) {
        if (event.key == "ArrowRight") {
          this.move_X_axis = modal_offset.offsetLeft + 10;
        }
        if (event.key == "ArrowLeft") {
          this.move_X_axis = modal_offset.offsetLeft - 10;
        }
        if (event.key == "ArrowUp") {
          this.move_Y_axis = modal_offset.offsetTop - 10;
        }
        if (event.key == "ArrowDown") {
          this.move_Y_axis = modal_offset.offsetTop + 10;
        }
      }
    }
  }
}