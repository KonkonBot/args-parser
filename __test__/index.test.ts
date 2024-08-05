import {expect, test} from "bun:test";

import {parser} from '../index'
import {Command, CommandOption} from "seyfert";

test("parse", () => {
        const content = 'aarón man "some large description" --age=10 --flag';

        const testOptions: Pick<CommandOption, "name">[] = [
            {
                name: "name",
            },
            {
                name: "description",
            },
            {
                name: "age",
            },
            {
                name: "flag",
            },
        ]

        const result = parser({
            quotes: [
                ['"', '"'],
            ],
            prefixes: ["--"],
            separators: ["=", ":"],
        })(content, {
            options: testOptions
        } as Command);

        expect(result).toEqual({
            name: "aarón",
            description: "some large description",
            age: "10",
            flag: "true",
        });
    }
);