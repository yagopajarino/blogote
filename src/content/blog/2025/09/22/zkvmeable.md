---
title: "ZKVMeable"
description: "Based on a true story."
pubDate: 2025-09-22
tags: ["zk"]
heroImage: "./20250922-cover.jpeg"
heroImageCaption: "Man entering the sea, Chapadmalal, Argentina"
---

_Based on a true story_.

I had to renew my passport, expiration was close, I hadn't any trip planned so I wans't too worried about it. I went to the official government web, booked a slot on the calendar a couple weeks ahead, all good. At checkout, I got a confirmation message saying my appointment was succesfully created, green checkmark included, of course.

A week before the appointment, I went back to the website to double check the details, but to my surprise, it didn't exist. No appointment had been created, so I had to take a new one and wait a few more weeks.

_What if I had a way to verify that my appointment was actually created?_

I've been doing some research on ZKVMs during the last few days and saw this line on the [Jolt paper](https://eprint.iacr.org/2023/1217.pdf)

> As an example, the prover could be a cloud service provider running an expensive computation on behalf of
> its client who acts as the verifier. A SNARK gives the verifier confidence that the prover ran the computation
> honestly

And that brought back memories of my failed passport appointment. What if, alongside the green checkmark on the confirmation page, I also had a proof I could verify? That way, I'd known for certain that the goverment server had actually _made the computation_ of taking my appointment and record it in the appointments database.
