# Radio inställningar

## SuperCollider

Starta SuperCollider med `sclang OSCCommunicator.scd -l sclang_conf.yaml`  
## Jack

Starta jack m.h.a `jackd -R -n scjack -d dummy -C 0 -P 0 -p 512`
(där `-p` är frames per period)

## Icecast

Icecast (eller mer specifikt, *Icecast2*) körs som en service på server-maskinen (Ubuntu), och kontrolleras därför med `systemctl` (dvs. `sudo systemctl status icecast2` för status, `reboot` och dylikt för kontroll). Ändra i /etc/icecast2/icecast.xml för att t.ex. byta port, ändra antalet uppkopplade klienter, källor, http-headers, och dylikt.

## Darkice

Darkice körs tillsammans med SuperCollider. Viktigt att jack-inställningar stämmer överens med Supercollider och port-inställningar och dylikt stämmer med Icecast.
`darkice -c ../radio/.darkice.cfg &`

# TODO
1. Gör så radio-script körs vid Startup [ ]
