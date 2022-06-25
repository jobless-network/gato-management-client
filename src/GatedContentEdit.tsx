import { Autocomplete, Box, Button, Chip, FormControlLabel, Grid, ListItemIcon, ListItemText, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { DigitalAsset, Network, networks, tokens, nfts, TokenType } from "./consts";
import { ReactComponent as IconX } from './assets/icon_X.svg'
import { useState } from "react";

enum Condition {
    ALL,
    SOME
}

type Rule = {
    type?: TokenType;
    digitalAsset?: DigitalAsset;
}

type GatedContent = {
    name: string;
    description: string;
    condition: Condition;
    rules: Rule[];
}

function GateRule(props: { rule: Rule, idx: number, setRule: (idx: number, newRule: Rule) => void, deleteCallback: (idx: number) => void }) {
    let setType = (newType: TokenType) => {
        props.setRule(props.idx, { type: newType })
    }

    let setDigitalAsset = (newDigitalAsset: DigitalAsset) => {
        props.setRule(props.idx, { ...props.rule, digitalAsset: newDigitalAsset })
    }

    return <div style={{ position: "relative" }}>
        <IconX style={{ float: "right", margin: "-20 -20 0 auto" }} onClick={() => props.deleteCallback(props.idx)} />
        <Box sx={{ width: "520px", height: "329px", padding: "24px", border: "1px solid #D7D7D7" }}>
            <Stack spacing={4}>
                <RadioGroup
                    row
                    name="type"
                    value={props.rule.type}
                    onChange={(_, value) => setType(value === "0" ? TokenType.NFT : TokenType.COIN)}
                >
                    <FormControlLabel value={TokenType.NFT} control={<Radio />} label="NFT collection" />
                    <FormControlLabel value={TokenType.COIN} control={<Radio />} label="Token" />
                </RadioGroup>
                <Autocomplete
                    id="network"
                    sx={{ width: "100%" }}
                    options={networks}
                    autoHighlight
                    getOptionLabel={(option: Network) => option.name}
                    renderOption={(props, option: Network) => (
                        <Stack direction="row" spacing={2} component="li" {...props}>
                            {<option.img />}
                            <Typography>{option.name}</Typography>
                        </Stack>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Network"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
                {props.rule.type === TokenType.COIN && <Autocomplete
                    id="token"
                    sx={{ width: "100%" }}
                    options={tokens}
                    value={props.rule.digitalAsset}
                    onChange={(_, value) => { value && setDigitalAsset(value) }}
                    autoHighlight
                    getOptionLabel={(option: DigitalAsset) => option.name}
                    renderOption={(props, option: DigitalAsset) => (
                        <Stack direction="row" spacing={2} component="li" {...props}>
                            {<option.img />}
                            <Typography>{option.name}</Typography>
                        </Stack>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Token"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />}
                {props.rule.type === TokenType.NFT && <Autocomplete
                    id="token"
                    sx={{ width: "100%" }}
                    options={nfts}
                    value={props.rule.digitalAsset}
                    onChange={(_, value) => { value && setDigitalAsset(value) }}
                    autoHighlight
                    getOptionLabel={(option: DigitalAsset) => option.name}
                    renderOption={(props, option: DigitalAsset) => (
                        <Stack direction="row" spacing={2} component="li" {...props}>
                            {<option.img />}
                            <Typography>{option.name}</Typography>
                        </Stack>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Collection"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />}
            </Stack>
        </Box>
    </div >
}

export default function GatedContentEdit() {
    const [gatedContent, setGatedContent] = useState({ name: "", description: "", condition: Condition.SOME, rules: [] as Rule[] });

    const setCondition = (condition: Condition) => {
        setGatedContent({ ...gatedContent, condition: condition });
    }

    const addRule = () => {
        var newGatedContent = { ...gatedContent };
        newGatedContent.rules.push({})
        setGatedContent(newGatedContent)
    }

    const deleteRule = (idx: number) => {
        var newGatedContent = { ...gatedContent };
        newGatedContent.rules.splice(idx, 1);
        setGatedContent(newGatedContent)
    }

    const setRule = (idx: number, newRule: Rule) => {
        var newGatedContent = { ...gatedContent };
        newGatedContent.rules[idx] = newRule;
        setGatedContent(newGatedContent)
    }

    return <Stack>
        <Stack spacing={2} sx={{ background: "#F5F7FA", paddingLeft: "32px", paddingBottom: "32px", paddingRight: "32px", paddingTop: "39px" }}>
            <TextField id="outlined-basic" label="Content name" variant="outlined" inputProps={{
                style: {
                    fontWeight: 900,
                    fontSize: 38,
                }
            }} />
            <TextField id="outlined-basic" label="Content description" variant="outlined" />
        </Stack>
        <Stack
            sx={{ paddingTop: "32px" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            <Stack direction="row" spacing={2}>
                <Typography sx={{ fontSize: 16, fontWeight: 900 }} color="#1B2437" gutterBottom>
                    Allow access when:
                </Typography>
                {gatedContent.condition === Condition.SOME && <><Chip color="primary" label="One of the rules apply" onClick={() => setCondition(Condition.SOME)} />
                    <Chip color="primary" variant="outlined" label="ALL rules apply" onClick={() => setCondition(Condition.ALL)} /></>}
                {gatedContent.condition === Condition.ALL && <><Chip color="primary" variant="outlined" label="One of the rules apply" onClick={() => setCondition(Condition.SOME)} />
                    <Chip color="primary" label="ALL rules apply" onClick={() => setCondition(Condition.ALL)} /></>}
            </Stack>
            <Button variant="outlined" onClick={() => addRule()}>+ New Rule</Button>
        </Stack>
        <Stack direction="row"
            justifyContent="space-between"
            alignItems="center" sx={{ paddingTop: "41px" }}>
            {gatedContent.rules.map((rule, idx) => (<GateRule rule={rule} idx={idx} deleteCallback={deleteRule} setRule={setRule} />))}
        </Stack>
    </Stack >
}