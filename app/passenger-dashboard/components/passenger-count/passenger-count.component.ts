import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    template: `
        <div>
            <h3>Airline Passengers!</h3>
            <div>
                Total checked in: {{ checkedInCount()}}/{{ items?.length }}
            </div>
        </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    checkedInCount(): number {
        if (!this.items) {
            return;
        }

        return this.items.filter(
            (passenger: Passenger) => passenger.checkedIn).length;
    }
}

/**
    Note: This resembles a .jsx file:

    class PassengerCountComponent extends React.Component {

        checkedInCount(): number {
            if (!this.props.items) {
                return;
            }

            return this.props.items.filter(
                (passenger: Passenger) => passenger.checkedIn).length;
        }

        render() {
            return (
                <div>
                    <h3>Airline Passengers!</h3>
                    <div>
                        Total checked in: { checkedInCount() }/{ items.length }
                    </div>
                </div>
            );
        }
    }
 */