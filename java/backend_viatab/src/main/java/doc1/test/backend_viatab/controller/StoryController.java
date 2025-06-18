package doc1.test.backend_viatab.controller;

import doc1.test.backend_viatab.model.Story;
import doc1.test.backend_viatab.repository.DepartmentRepository;
import doc1.test.backend_viatab.repository.StoryRepository;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class StoryController {
    private final StoryRepository stories;
    private final DepartmentRepository depts;

    public StoryController(StoryRepository stories, DepartmentRepository depts) {
        this.stories = stories; this.depts = depts;
    }

    @GetMapping("/departments")
    public List<Map<String,Object>> listDepts() {
        var all = depts.findAll();
        var out = new ArrayList<Map<String,Object>>();
        all.forEach(d -> {
            out.add(Map.of("id",d.getId(), "name", d.getName()));
        });
        return out;
    }

    @GetMapping("/departments/{id}/stories")
    public List<Story> storiesByDept(@PathVariable Long id) {
        return stories.findByDepartmentId(id);
    }

    @PostMapping("/departments/{id}/stories")
    public Story addStory(@PathVariable Long id, @RequestBody Story s) {
        var dept = depts.findById(id).orElseThrow();
        s.setDepartment(dept);
        return stories.save(s);
    }

    @PutMapping("/stories/{id}")
    public Story update(@PathVariable Long id, @RequestBody Story s) {
        var existing = stories.findById(id).orElseThrow();
        existing.setTitle(s.getTitle());
        existing.setContent(s.getContent());
        return stories.save(existing);
    }

    @DeleteMapping("/stories/{id}")
    public void delete(@PathVariable Long id) {
        stories.deleteById(id);
    }
}
