package nassar.goldagram.backend.controllers;

import nassar.goldagram.backend.entities.Gold;
import nassar.goldagram.backend.repositories.GoldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gold")
public class GoldController {

    @Autowired
    private GoldRepository goldRepository;

    @PostMapping("/add")
    public Gold addGold(@RequestBody Gold gold) {
        return goldRepository.save(gold);
    }

    @GetMapping("/all")
    public List<Gold> getAllGoldItems() {
        return goldRepository.findAll();
    }
}