import { trigger, transition, style, animate, state } from '@angular/animations';

export let slideSidenav = trigger('slideState',[
    state('expand', style({ width: '300px' })),
    state('collapse', style({ width: '40px' })),
    transition( 'expand <=> collapse', animate(200) )
  ]);