import { Component, OnInit } from '@angular/core';
import { GanttItem } from '@worktile/gantt';

@Component({
  selector: 'gantplugin',
  templateUrl: './gantplugin.component.html',
  styleUrls: ['./gantplugin.component.scss']
})
export class GantpluginComponent implements OnInit {
  title = 'gantplugin';
  showExpandIcon
  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197 },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addTask() {
    let newTask:GanttItem = {
      id: (this.items.length + 1).toString(),
      title: 'Nouvelle tâche',
      start: 1625483597,
      end: 1625486000
    };

    this.items=[...this.items,newTask];
   // this.ngOnInit();
  }
    }
  
