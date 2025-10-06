// object
const person = {
    name: "uks",
    age: 20,
    city: "ramnad"
}
console.log(person)

// dot notation
const dn = {
    name: "uks",
    age: 20,
    city: "ramnad"
}
console.log("dot notation", dn.name)
console.log("dot notation", dn.age)
console.log("dot notation", dn.city)

// bracket notation
const bn = {
    name: "uks",
    age: 20,
    city: "ramnad"
}
console.log("bracket notation :", bn["name"])
console.log("bracket notation :", bn["age"])
console.log("bracket notation :", bn["city"])

// nested object
const no = {
    name: "uks",
    age: 20,
    city: "ramnad",
    skill: {
        batting: 90,
        bowling: 90,
        wk: 100,
        feilding: 100
    }
}
console.log("nested object :", no)
console.log(no.name)
console.log(no.skill)

// object + methods
const om = {
    name: "uks",
    age: 20,
    city: "ramnad",
    omf: function () {
        console.log("welcome to my home " + this.name)
    }
}
console.log(om)
om.omf()

// object keys, value, entries
const per = {
    name: "uks",
    age: 20,
    city: "ramnad"
}
console.log(Object.keys(per))
console.log(Object.values(per))
console.log(Object.entries(per))

// assign
const as = {
    name: "uks",
    age: 20,
    city: "ramnad"
}
const skill = {
    batting: 90,
    bowling: 90,
    wk: 100,
    feilding: 100
}
const ans = Object.assign(as, skill)
console.log(ans)

// freeze
const fr = {
    brand: "bmw"
}
Object.freeze(fr)
console.log(fr)

// seal
const se = {
    name: "uks",
    age: 20
}
Object.seal(se)
console.log(se)
