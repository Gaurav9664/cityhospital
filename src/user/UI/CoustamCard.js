import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CoustamCard({ value }) {
    return (

        <Card
            style={{
                width: '18rem'
            }}
        >
            {
                value.url ?
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    /> : null
            }

            <CardBody>
                <CardTitle tag="h5">
                    {value.medicineName}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {value.price}
                </CardSubtitle>
                <CardText>
                    {value.description}
                </CardText>

                {
                    value.btn ?
                        <Button>
                            Button
                        </Button> : null
                }

            </CardBody>
        </Card>
    );
}

export default CoustamCard;