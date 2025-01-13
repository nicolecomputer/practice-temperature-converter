import React from "react"

const borderColor = "#DBDCDF"

type UnitProps = {
    unit: string,
    value: string,
    onChange: (value: string) => void
}
export default function Unit({ unit, value, onChange }: UnitProps) {
    const [focused, setFocused] = React.useState(false)
    return (
        <div style={{
            border: `1px solid ${borderColor}`,
            borderRadius: 4,
            width: 140,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: focused ? "1px 2px 5px rgba(254, 187, 72, 0.67)" : ""
        }}>
            <div style={{
                flex: 1,
                backgroundColor: '#FFFEFE',
            }}>
                <input
                    style={{
                        backgroundColor: 'rgba(0,0,0,0)',
                        margin: 0,
                        padding: 0,
                        textAlign: 'center',
                        color: 'black',
                        fontWeight: 'bold',
                        border: 'none',
                        paddingLeft: 4,
                        paddingRight: 4
                    }}
                    type="number"
                    value={value.toString()}
                    onFocus={() =>
                        setFocused(true)}
                    onBlur={() =>
                        setFocused(false)}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        onChange(value)
                    }}
                />
            </div>
            <div style={{
                backgroundColor: "#F8F9FA",
                flex: 1,
                borderTop: `1px solid ${borderColor}`,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                paddingTop: 10,
                paddingBottom: 10
            }}>
                <p style={{
                    padding: 0,
                    margin: 0,
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    color: 'black',
                }}>{unit}</p>
            </div>
        </div>
    )
}
