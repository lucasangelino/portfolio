import { Stack, useColorModeValue } from "@chakra-ui/react";
import { 
    HighProjectCard,
} from '../cards/HProjectCard';

export function HighlightedProjects({projects}) {

    return (
        <Stack
            align={"center"}
            bg={useColorModeValue("#800080", "#800080")}
            rounded={'lg'}
            spacing={{ base: 8, md: 10 }}
            my={{base: 50, md: 15}}
            direction={{ base: "column", md: "row" }}
        >
            {
                projects.map( (highPRoject, index) => <HighProjectCard key={index} project={highPRoject} /> )
            }
        </Stack>
    )
}