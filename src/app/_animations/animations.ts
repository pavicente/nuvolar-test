import { trigger, group, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('search => detail', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' })
            , { optional: true }),
        group([  // block executes in parallel
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0  }))
            ], { optional: true }),
        ])
    ]),
    transition('detail => search', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' })
            , { optional: true }),
        group([  // block executes in parallel
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
            ], { optional: true }),
        ])
    ])
]);
