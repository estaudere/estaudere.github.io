---
title: CLIP-based differentiable search index
date: 2023-11-29
lead: Experiments in DSI with a CLIP encoder
---

Recent work on [differentiable search indexes](https://arxiv.org/abs/2202.06991) for retrieval demonstrated an end-to-end differentiable retrieval system over a corpus of text documents just by finetuning a foundation language model (T5). I provide an implementation of one of the models proposed in their paper, and I also experimented with using a CLIP encoder to embed a corpus of images instead and find ranked images given a text query. Experiments are ongoing.

**[GitHub](https://github.com/estaudere/dsi)**