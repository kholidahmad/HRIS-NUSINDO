import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

/*export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            query(
                ':enter',
                [style({ opacity: 0 })],
                { optional: true }
            ),
            query(
                ':leave',
                [style({ opacity: 1 }), animate('0.9s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ opacity: 0 }), animate('0.9s', style({ opacity: 1 }))],
                { optional: true }
            )
        ])
    ]);
*/

export const slideInAnimation =

    trigger('routeAnimations', [

        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ],
                { optional: true }),
            query(':enter', [
                style({ opacity: 0 })
            ],
                { optional: true }
            ),
            query(':leave', animateChild(),
                { optional: true }),
            group([
                query(':leave', [
                        style({ opacity: 1 }),
                        animate('0.5s', style({ opacity: 0 }))
                    ],
                    { optional: true }),
                query(':enter',
                    [
                        style({ opacity: 0 }),
                        animate('0.5s', style({ opacity: 1 }))
                    ],
                    { optional: true })
            ]),
            query(':enter', animateChild(),
                { optional: true }),
        ])
        /*transition( '* => *', [
            query(':enter',
                [
                    style({ opacity: 0 })
                ],
                { optional: true }
            ),

            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.5s', style({ opacity: 0 }))
                ],
                { optional: true }
            ),

            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.5s', style({ opacity: 1 }))
                ],
                { optional: true }
            )

        ])*/

    ]);

/*
import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);*/